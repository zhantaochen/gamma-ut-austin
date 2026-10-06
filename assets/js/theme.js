/* Light/dark theme: dark by default until the reader picks one. */
(function () {
    var KEY = 'gamma-theme';
    var root = document.documentElement;

    function stored() {
        try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }

    function apply(theme) {
        root.setAttribute('data-theme', theme);
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            var next = theme === 'dark' ? 'light' : 'dark';
            btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
            btn.setAttribute('title', 'Switch to ' + next + ' theme');
        }
    }

    apply(stored() || 'dark');

    document.addEventListener('DOMContentLoaded', function () {
        var header = document.querySelector('.header-content');
        if (!header) return;

        var btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.className = 'theme-toggle';
        btn.type = 'button';
        btn.innerHTML =
            '<svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' +
            '<svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
        btn.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            try { localStorage.setItem(KEY, next); } catch (e) {}
            apply(next);
        });
        header.appendChild(btn);
        apply(root.getAttribute('data-theme'));
    });
})();
