// projects.js — simple placeholder / demo actions
(function(){
  const emptyEl = document.getElementById('projects-empty');
  const grid = document.getElementById('projects-grid');
  const addBtn = document.getElementById('add-sample'); // Tlačítko 'add-sample' neexistuje v HTML, ale nechávám pro jistotu
  const uploadBtn = document.getElementById('upload-project'); // Tlačítko 'upload-project' neexistuje v HTML
  const emptyAdd = document.getElementById('empty-add');

  function showGrid(){
    if (!emptyEl || !grid) return;
    emptyEl.hidden = true;
    grid.hidden = false;
  }

  function addSampleProject(){
    if (!grid) return;
    showGrid();
    const id = 'p-' + Math.random().toString(36).slice(2,9);
    const card = document.createElement('article');
    card.className = 'project-card';
    
    // ZMĚNA ZDE: Použití <img> v .project-thumb
    card.innerHTML = `
      <div class="project-thumb">
        <img src="https://via.placeholder.com/400x250/EAF6EA/2C5F2D?text=Náhled+Projektu" alt="Náhled projektu Automatizace faktur">
      </div>
      <div class="project-meta">
        <div>
          <div class="project-title">Automatizace zpracování faktur</div>
          <div class="project-desc">Integrace: e-mail → OCR → účetní systém. Úspora ~6 h/týdně.</div>
        </div>
        <div class="chip">Make + AI</div>
      </div>
      <div class="project-footer">
        <small class="muted">Doba nasazení: 3 týdny</small>
        <a href="#" class="btn btn-ghost" aria-label="Detail projektu">Detail</a>
      </div>
    `;
    grid.prepend(card);
    
    grid.setAttribute('aria-label', 'Byl přidán nový projekt');
    setTimeout(()=> grid.removeAttribute('aria-label'), 1200);
  }

  addBtn && addBtn.addEventListener('click', addSampleProject);
  emptyAdd && emptyAdd.addEventListener('click', addSampleProject);

  // simple upload stub
  uploadBtn && uploadBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Funkce nahrání projektu zatím není implementována v tomto náhledu.');
  });

})();

// Tento kód byl na konci vašeho souboru, nechávám ho
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    document.querySelectorAll('.filter-btn').forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected','true');
    // zde zavolej filtraci projektů podle btn.dataset.filter
  });
});