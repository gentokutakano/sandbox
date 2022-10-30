import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (value) => {
  const deleteTarget = value.parentNode;
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

const deleteFromCompleteList = (value) => {
  const deleteTarget = value.parentNode;
  document.getElementById("complete-list").removeChild(deleteTarget);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton);
    const deleteTarget = completeButton.parentNode;

    const div2 = document.createElement("div");
    div2.className = "list-row";
    const completeText = deleteTarget.querySelector("li").innerText;
    const li2 = document.createElement("li");
    li2.innerText = completeText;
    div2.appendChild(li);
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deleteFromCompleteList(backButton);

      const text = backButton.parentNode.querySelector("li").innerText;
      createIncompleteList(text);
    });
    div2.appendChild(backButton);
    document.getElementById("complete-list").appendChild(div2);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
