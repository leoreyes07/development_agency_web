document.addEventListener("DOMContentLoaded", () => {

    const mobile_btn = document.querySelector(".navbar_mobile-btn");
    const mobile_menu = document.querySelector(".menu_mobile");
    const btn_close = document.querySelector(".menu_mobile-close");
    const menu_items = document.querySelectorAll(".menu_mobile-item");

    // Función mostrar / ocultar menú
    const toggleMenu = () => {
        if (mobile_menu) {
            mobile_menu.classList.toggle("menu_mobile-show");
        }
    };

    // Abrir menú
    if (mobile_btn) {
        mobile_btn.addEventListener("click", toggleMenu);
    }

    // Cerrar menú con botón X
    if (btn_close) {
        btn_close.addEventListener("click", toggleMenu);
    }

    // Cerrar menú automáticamente si pasa a desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1000 && mobile_menu) {
            mobile_menu.classList.remove("menu_mobile-show");
        }
    });

    // Submenús desplegables
    menu_items.forEach(item => {
        item.addEventListener("click", (e) => {

            const submenu = item.querySelector(".submenu_mobile");

            if (submenu) {
                e.stopPropagation();

                submenu.style.display =
                    submenu.style.display === "block" ? "none" : "block";
            }
        });
    });

});