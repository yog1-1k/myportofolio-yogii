export function projectsSectionFunctionality(){
  const projects = [
    {
        image: 'project.gif',
        title: 'Game Tic Tac Tue',
        description: 'Game Sederhana yang dibuat untuk dimanikan dikala waktu gabut saja dan game ini dibuat ketika saya lagi gabut juga wkwk.',
        role: 'Game',
        clientSatisfaction: '95%',
        link: 'https://yog1-1k.github.io/game-tictactue/'
    },
    {
        image: 'project.gif',
        title: 'Aplikasi List Sederhana',
        description: 'Aplikasi List Tugas Sederhana Untuk Mencatat Tugas Harian Kamu, Note:Jangan Di Close Nanti Tugasmu Hilang haha.',
        role: 'Aplikasi',
        clientSatisfaction: '95%',
        link:'https://yog1-1k.github.io/apk_list_tugas_sederhana/'
    },
    {
        image: 'project.gif',
        title: 'Aplikasi Kalkulator Sederhana',
        description: 'Aplikasi Kalkulator Sederhana.',
        role: 'Aplikasi',
        clientSatisfaction: '95%',
        link:'https://yog1-1k.github.io/kalkulator/'
    },
    {
        image: 'project.gif',
        title: 'Semangat Sekali Scrollnya',
        description: 'Yah Sebenarnya Ada Banyak Lagi Project Saya Yang Lain, Tapi Belum Sempat Dimasukkan.Next Kita Masukkan Ya😁.',
        role: 'Website',
        clientSatisfaction: 'Belum Ada',
        link:''
    }
  ];

  let projectHTML = '';

  projects.forEach(project => {
  projectHTML += `
    <div class="project-card">
      <div class="container title-and-description">
        <h2 class="project-title">${project.title}</h2>
        <p class="project-description semi-transparent-word">
          ${project.description}
        </p>

        <a 
          style="text-decoration:none"
          href="${project.link}" 
          target="_blank" 
          class="call-to-action-btn"
        >
          Visit Site
        </a>
      </div>

      <div class="fade-bgColor"></div>

      <div class="container image-and-result">   
        <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
        <div class="project-result d-flex">
          <div>
            <p class="role semi-transparent-word">Jenis</p>
            <p class="result">${project.role}</p>
          </div>  
          <div>
            <p class="satisfaction semi-transparent-word">
              Kepuasan Pengguna
            </p>
            <p class="result">${project.clientSatisfaction}</p>
          </div>
        </div>
      </div>
    </div>
  `;
});

  
  document.querySelector('.projects-container').innerHTML = projectHTML


}



