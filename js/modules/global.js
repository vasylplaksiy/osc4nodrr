let pageScroll = {
    state: false,
    init: function () {
        this.scrollTop = 0;
        window.pageScroll = this;
    },
    getScrollBarWidth: function () {
        return window.innerWidth - document.body.clientWidth;
    },
    isMobile: function () {
        let obj = this;
        let scrollWidth = obj.getScrollBarWidth();
        let checkMobile = scrollWidth < 1;
        return checkMobile;
    },
    disable: function () {
        if (this.state) {
            return;
        }
        var obj = this,
            scrollWidth = obj.getScrollBarWidth();
        obj.scrollTop = window.pageYOffset;

        if (this.disabled) {
            return;
        }

        document.body.style.position = "fixed";
        document.body.style.marginTop = "-" + this.scrollTop + "px";
        document.body.style.width = '100%';
        document.body.style.paddingRight = scrollWidth + "px";
        document.body.style.overflowY = scrollWidth && !obj.isMobile() ? 'hidden' : '';
        this.state = true;
    },
    enable: function () {
        let obj = this;
        if (!this.state) {
            return;
        }
        if (this.disabled) {
            return;
        }
        document.body.style.position = '';
        document.body.style.marginTop = '';
        document.body.style.width = '';
        document.body.style.paddingRight = '';
        document.body.style.overflowY = '';
        window.scroll(0, obj.scrollTop);
        this.state = false;
    }
};

pageScroll.init();

if (document.querySelector(".header_theme")) {
    document.querySelectorAll(".header_theme").forEach(btn => {
        btn.addEventListener("click", function () {
            const html = document.documentElement;
            const setTo = this.getAttribute('data-theme');
            html.setAttribute('data-theme', setTo);
            localStorage.setItem('theme', setTo);
        });
    });
}

if (document.querySelector(".header_nav")) {
    document.querySelector(".header_nav").addEventListener("click", function (e, i) {
            e.preventDefault();
            document.body.classList.add("show-nav");
            pageScroll.disable();
    });
}

if (document.querySelector(".nav_close")) {
    document.querySelector(".nav_close").addEventListener("click", function (e, i) {
            e.preventDefault();
            document.body.classList.remove("show-nav");
            pageScroll.enable();
    });
}