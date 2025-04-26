const BOT_TOKEN = "7754841260:AAHq7e1g6HGopuvr-a_gocJoiKnjE4k_Los";
    const CHAT_ID = "5661686916";
    // const CHAT_ID = "-1002397183218";

    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('telephone').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !phone || !message) {
        alert("Iltimos barcha maydonlarni to‘ldiring!");
        return; 
      }

      let text = `📩 Yangi Xabar!%0A`;
      text += `👤 Ismi: ${name}%0A`;
      text += `📞 Phone: ${phone}%0A`;
      text += `💬 Xabar: ${message}`;

      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=HTML`;


      const api = new XMLHttpRequest();
      api.open("GET", url, true);
      console.log(api);
      api.onload = function () {
        if (api.status === 200) {
          alert("Xabar muvaffaqiyatli yuborildi!");
          document.getElementById('contactForm').reset();
        } else {
          alert("Xabar yuborishda xatolik yuz berdi.");
        }
      };
      api.onerror = function () {
        alert("Tarmoq xatosi! Iltimos, internetni tekshiring.");
      };
      api.send();
    });

