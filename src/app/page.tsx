'use client';

function changeTheme(document: Document){
  var box = document.getElementById('themeSelector') as HTMLInputElement;

  if(box!.checked == true){
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else{
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

export default function Home() {
  return (
    <div>
      <header>
        <script></script>

      <label className="switch">
        <input id="themeSelector" type="checkbox" onClick={() => changeTheme(document)} />
        <span className="slider"></span>
      </label>

        <div id="topbar">
          <div>Consulta de Valores</div>
        </div>
      </header>

      <main>
      </main>
      <footer></footer>
    </div>
  );
}
