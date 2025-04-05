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