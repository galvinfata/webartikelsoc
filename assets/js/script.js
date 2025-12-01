// Data Artikel (Simulasi Database Sederhana)
// Tambahkan artikel baru di bagian atas array ini
const articles = [
    {
        title: "Waspada Phishing Mengatasnamakan HRD",
        category: "Alert",
        date: "24 Nov 2024",
        excerpt: "Ditemukan kampanye email phishing baru yang menargetkan karyawan dengan subjek 'Bonus Tahunan'. Jangan klik tautan sembarangan."
    },
    {
        title: "Patch Management: Update Windows Server",
        category: "Update",
        date: "20 Nov 2024",
        excerpt: "Microsoft telah merilis patch untuk kerentanan kritikal. Harap segera lakukan pembaruan pada seluruh server operasional."
    },
    {
        title: "Pengenalan Tim DopperCSIRT",
        category: "News",
        date: "15 Nov 2024",
        excerpt: "DopperCSIRT resmi dibentuk untuk menjaga kedaulatan data organisasi. Kenali tugas dan fungsi kami."
    }
];

// Fungsi untuk me-render artikel ke HTML
const articleContainer = document.getElementById('article-list');

function renderArticles() {
    let htmlContent = '';
    
    articles.forEach(article => {
        htmlContent += `
            <div class="article-card">
                <div class="article-body">
                    <span class="tag">${article.category}</span>
                    <span class="date">${article.date}</span>
                    <h3>${article.title}</h3>
                    <p>${article.excerpt}</p>
                    <br>
                    <a href="#" style="color: #007bff; text-decoration: none; font-weight: bold;">Baca Selengkapnya &rarr;</a>
                </div>
            </div>
        `;
    });

    articleContainer.innerHTML = htmlContent;
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderArticles);