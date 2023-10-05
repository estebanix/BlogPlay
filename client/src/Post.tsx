export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Model-X/5253/1611841733029/front-left-side-47.jpg?tr=w-456"
          alt="dog"
        />
      </div>
      <div className="texts">
        <h2>Nice Dog</h2>
        <p className="info">
          <a href="#" className="author">
            Samo
          </a>
          <time>2023-10-04</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          delectus qui iusto voluptate nesciunt explicabo accusantium commodi
          ducimus quidem laudantium doloremque mollitia, eum cumque porro, velit
          voluptatem itaque! Atque, iusto.
        </p>
      </div>
    </div>
  );
}
