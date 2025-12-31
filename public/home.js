 
    function toggleSidebar() {
    const sidebar = document.getElementById("sidebar1");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
  }
 
    

   
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    // Highlight based on URL
    buttons.forEach(button => {
        const link = button.closest('a');
        if (link && link.getAttribute('href') === window.location.pathname) {
            button.classList.add('btn--active');
        }
    });

    // Keep your click logic too (optional)
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('btn--active'));
            this.classList.add('btn--active');
        });
    });
}); 

 
     function showpop(){
      document.querySelector('.pop').style.display = 'flex';    
     } 

     function hidepop(){
      document.querySelector('.pop').style.display = 'none';    
     }
 
 
const form = document.getElementById("uploadForm");
const statusText = document.getElementById("uploadStatus");
const uploadBtn = document.getElementById("uploadBtn");
const progressWrap = document.getElementById("progressWrap");
const progressBar = document.getElementById("progressBar");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("dropzone-file");
  if (!fileInput.files.length) return;

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  // UI: start upload
  uploadBtn.disabled = true;
  uploadBtn.textContent = "Uploading...";
  statusText.classList.remove("hidden");
  statusText.textContent = "⏳ Uploading file...";
  progressWrap.classList.remove("hidden");

  try {
    const res = await fetch("/files", {
      method: "POST",
      body: formData
    });

    // DB save step
    statusText.textContent = "💾 Saving to database...";
    progressBar.style.width = "80%";

    if (!res.ok) throw new Error("Upload failed");

    progressBar.style.width = "100%";
    statusText.textContent = "✅ Uploaded successfully";

    setTimeout(() => {
      hidepop();          // close popup
      location.reload(); // refresh files list
    }, 800);

  } catch (err) {
    console.error(err);
    statusText.textContent = "❌ Upload failed";
    uploadBtn.disabled = false;
    uploadBtn.textContent = "Upload File";
  }
});
 
 
  
 
