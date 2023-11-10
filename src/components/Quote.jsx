import { useEffect, useState } from "react";

const Quote = () => {
  const [newQuote, setNewQuote] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    getData();
  }, [newQuote]);

  return (
    <div id="quote-box">
      <div id="text">{loading ? "Loading..." : data?.content}</div>
      <div id="author">-- {data?.author}</div>
      <div className="bottom">
        {!loading && (
          <a
            href={`https://twitter.com/intent/tweet?url=${data?.content}`}
            target="_blank"
            id="tweet-quote"
          >
            tweet
          </a>
        )}

        <button
          id="new-quote"
          onClick={() => setNewQuote(newQuote + 1)}
          className={`${loading && "disable"}`}
          disabled={loading}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
