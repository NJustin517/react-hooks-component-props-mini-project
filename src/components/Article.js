const coffee = "☕️";
const emoji = "🍱";

function readTime(mins) {
  let result = "";
  if (mins < 30) {
    const multiplyer = Math.ceil(mins / 5);
    for (let i = 0; i < multiplyer; i++) {
      result += coffee;
    }
  } else {
    const multiplyer = Math.ceil(mins / 10);
    for (let i = 0; i < multiplyer; i++) {
      result += emoji;
    }
  }
  return result;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {readTime(minutes)}
        {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
