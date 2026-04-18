

const saveAnswer = (answer) => {
    localStorage.setItem("answer", JSON.stringify(answer));
}

export default saveAnswer