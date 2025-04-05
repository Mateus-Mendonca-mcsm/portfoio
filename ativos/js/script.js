// Adiciona um botão "Entre em Contato" com link para WhatsApp
document.addEventListener("DOMContentLoaded", function () {
    const contatoDiv = document.createElement("div");
    contatoDiv.style.position = "fixed";
    contatoDiv.style.bottom = "20px";
    contatoDiv.style.right = "20px";
    contatoDiv.style.zIndex = "1000";

    const linkWhatsApp = document.createElement("a");
    linkWhatsApp.href = "https://wa.me/5533984667761"; // Substitua SEU_NUMERO_DE_TELEFONE pelo número no formato internacional, ex: 5511999999999
    linkWhatsApp.target = "_blank";
    linkWhatsApp.style.textDecoration = "none";
    linkWhatsApp.style.backgroundColor = "#25D366";
    linkWhatsApp.style.color = "white";
    linkWhatsApp.style.padding = "10px 20px";
    linkWhatsApp.style.borderRadius = "5px";
    linkWhatsApp.style.fontFamily = "Arial, sans-serif";
    linkWhatsApp.style.fontSize = "16px";
    linkWhatsApp.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    linkWhatsApp.innerText = "Entre em Contato";

    contatoDiv.appendChild(linkWhatsApp);
    document.body.appendChild(contatoDiv);
});
// Adiciona direitos autorais no fim da página com ano automático
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement("footer");
    footer.style.textAlign = "center";
    footer.style.padding = "10px";
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.width = "100%";
    footer.style.backgroundColor = "#f1f1f1";
    footer.style.fontFamily = "Arial, sans-serif";
    footer.style.fontSize = "14px";
    footer.style.color = "#333";

    const currentYear = new Date().getFullYear();
    footer.innerText = `© ${currentYear} Todos os direitos reservados.`;

    document.body.appendChild(footer);
});
