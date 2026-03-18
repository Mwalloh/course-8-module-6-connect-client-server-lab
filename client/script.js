fetch("http://127.0.0.1:5000/events")
	.then((res) => res.json())
	.then((events) => events.forEach(renderEvent));

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	let title = document.querySelector("#title").value;

    // if (!title) {
    //     return null
    // }

	fetch("http://127.0.0.1:5000/events", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ title }),
	})
		.then((res) => res.json())
		.then(renderEvent);
});

function renderEvent(event) {
	const li = document.createElement("li");
	li.textContent = event.title;
	document.querySelector("#event-list").appendChild(li)
    document.querySelector('#title').value = ""
}
