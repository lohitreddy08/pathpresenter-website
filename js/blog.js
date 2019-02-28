const dataArticles = [];

function displayArticles() {
  const article = document.getElementById('articles');
  article.innerHTML = dataArticles.map((data) => {
    return `<div class="card col-2 ml-5 mt-5">
            <img src="${data.file}" class="card-img-top" alt="Image Not Loaded">
           <div class="card-title mt-2 ml-3">${data.title}</div>
           <div class="card-body">${data.breifd}</div>
           <div class="card-footer">${data.aname}</div>
         </div>`;
  }).join(" ")
}

function validateArticle() {
  const article = {
    title: '',
    aname: '',
    email: '',
    breifd: '',
    file: '',
    content: ''
  };
  article.title = document.forms['article']['title'].value;
  article.aname = document.forms['article']['aname'].value;
  article.email = document.forms['article']['email'].value;
  if(this.wordLimit()){
    article.breifd = document.forms['article']['breifd'].value;
  }else{
     alert('exceeded word count');
    return false;
  }
  article.file = document.forms['article']['file'].value;
  article.content = quill.getContents();
  //console.log(article.title + article.aname + article.email + article.breifd + article.file + article.content);
  dataArticles.push(article);
  this.resetit();
  console.log(dataArticles);
  this.displayArticles();
}

function wordLimit(){
    const text = document.forms['article']['breifd'].value;
    var num = text.split(' ').length;
    console.log(num);
    if(num > 40){
        console.log ('in')
        return false
    }else
    return true
}

function resetit() {
  document.getElementById('article').reset();
  const num = quill.getLength();
  quill.deleteText(0, num);
  return null;
}
