document.addEventListener('DOMContentLoaded', () => {
    const msgs = [
        "كل سنة وإنتِ السبب إن أيامي بقت أحلى يا نور حياتي 🤍",
        "سنين كتير معاكي… ولسه قلبي بيختارك كل يوم",
        "وجودك جنبي هو أحلى حاجة حصلتلي فحياتي",
        "كل سنة وإنتِ بيتي وراحتي و بنتي و مراتي و كل حاجة ليا",
        "أنا محظوظ إني اخترت اجمل و ارق بنوتة",
        "حبك هو الحاجة الوحيدة اللي عمرها ما بهتت و عمري ما نسيتها يا حب عمري انتي",
        "كل سنة وإنتِ أحلى صدفة في حياتي و احلى حاجة انا اخترتها",
        "مهما عدى وقت… إنتِ لسه البنوتة الي اتمنيت تحبني",
        "معاكِي فهمت يعني إيه حب و يعني ايه حياة جميلة",
        "عيد ميلادك بينبض فقلبي كل سنة وانتي معايا (بحبك يا مزتي)"
    ];

    document.getElementById('openBtn').addEventListener('click', () => {
        if(document.getElementById('password').value === "2003") {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('gift-content').classList.remove('hidden');
            document.getElementById('bgMusic').play();
            
            const container = document.getElementById('main-container');
            
            setInterval(() => {
                const h = document.createElement('div');
                h.innerHTML = '❤️'; h.className = 'heart';
                h.style.left = Math.random() * 100 + 'vw';
                document.body.appendChild(h);
                setTimeout(() => h.remove(), 4000);
            }, 500);

            msgs.forEach((m, i) => {
                const div = document.createElement('div');
                div.className = 'section'; div.innerText = m;
                container.appendChild(div);
                if(i % 2 === 0 && i < 11) {
                    const row = document.createElement('div');
                    row.className = 'gallery-row';
                    row.innerHTML = `<img src="images/${i+1}.jpg" class="gallery-img">
                                     <img src="images/${i+2}.jpg" class="gallery-img">`;
                    container.appendChild(row);
                }
            });
        } else { alert("كلمة السر غلط!"); }
    });
});