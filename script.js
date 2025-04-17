function chat() {
  // İstifadəçinin yazdığı mesajı alırıq
  let userMessage = document.getElementById("userInput").value;
  let response = ""; // Başlanğıcda boş bir cavab

  // İstifadəçinin yazdığı suallara görə bot cavab verir
  if (userMessage.toLowerCase() === "kiber təhlükəsizlik nədir?") {
    response = "Kiber təhlükəsizlik, internet və kompüter sistemlərində məlumatları qorumaq məqsədidir.";
  } else if (userMessage.toLowerCase() === "etik hackerlik nədir?") {
    response = "Etik hackerlər qanuni yollarla sistemləri yoxlayıb zəiflikləri tapır.";
  } else {
    response = "Təəssüf ki, bu sualın cavabını bilmirəm. Yenə də sual verə bilərsiniz.";
  }

  // Cavabı istifadəçiyə göstəririk
  document.getElementById("chatResponse").innerHTML = response;
}