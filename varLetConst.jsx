var text=document.querySelector("input[type='text']");
var button = document.querySelector("button");
var div = document.querySelector("div");

button.onclick = function(){
    var content = text.value;
    div.innerText = content;
}

return (
  <div>
    <input type="text" placeholder="技术蛋老师" />
    <button>发表评论</button>
  </div>
);