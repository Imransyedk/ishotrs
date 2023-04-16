var div = document.createElement("div");
div.style.textAlign = "center";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "data");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search";
button.style.marginLeft = "5px";
button.addEventListener("click", foo);

let articles = document.createElement("div");
articles.setAttribute("id", "articles");

div.append(input, button, articles);
document.body.append(div);

async function foo() {
  let res = document.getElementById("data").value;
  console.log(res);
  let url = `https://inshorts.deta.dev/news?category=science`;
  let res1 = await fetch(url);
  let res2 = await res1.json();
  console.log(res2);

  let articlesHTML = "";
  for (let i = 0; i < res2.data.length; i++) {
    let article = res2.data[i];
    articlesHTML += `
      <div class="article">
        <h3>${article.author}</h3>
        <p>${article.content}</p>
        <p>ID: ${article.news_id}</p>
        <p>Date: ${article.date}</p>
      </div>
    `;
  }
  articles.innerHTML = articlesHTML;
}

foo();
