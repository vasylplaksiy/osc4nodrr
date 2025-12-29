if (document.querySelector('.tippy-html')) {
    tippy('.tippy-html', {
        allowHTML: true,
        interactive :true,
        maxWidth: 130,
        placement: 'top-end',
    });
}

if (document.querySelector('.tippy-inform')) {
    tippy('.tippy-inform', {
        maxWidth: 175,
        placement: 'top',
        theme: 'important',
    });
}