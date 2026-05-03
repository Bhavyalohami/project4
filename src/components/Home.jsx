import React, { useMemo, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiGift,
  FiHeadphones,
  FiSearch,
  FiShield,
  FiStar,
  FiTruck,
} from "react-icons/fi";
import { categories, formatPrice, productList } from '../data/products';
import ThreeStage from './ThreeStage';
import Reveal from './Reveal';
import MotionGlyphs from './MotionGlyphs';

const Home = () => {
  const dispatch=useDispatch();
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();
    return productList.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = !search || `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  const addToCartHandler=(options)=>{
    dispatch({type:"addToCart",payload:options});
    dispatch({type:"calculatePrice",})
    toast.success(`${options.name} added to cart`);
  };

  return (
    <main className='home'>
      <section className="heroSection">
        <KineticSvg className="heroGlyph glyphOne" />
        <KineticSvg className="heroGlyph glyphTwo" />
        <div className="heroCopy">
          <p className="sectionEyebrow">Kinetic hardware lab</p>
          <h1>Gear that feels engineered from the future.</h1>
          <span>
            LumaGear now moves like a product lab: live device systems,
            orbiting specs, bundle logic, and curated hardware for work,
            travel, creation, and deep focus.
          </span>
          <div className="heroActions">
            <a href="#catalog" className="primaryAction">
              Shop collection <FiArrowRight />
            </a>
            <Link to="/deals" className="secondaryAction">View deals</Link>
          </div>
          <div className="heroTrust">
            <span><FiCheckCircle /> Price protection</span>
            <span><FiTruck /> Same-day pickup</span>
            <span><FiShield /> Care plans</span>
          </div>
        </div>

        <div className="heroProduct heroStageCard" aria-label="Animated LumaGear 3D device system">
          <ThreeStage />
          <div className="stageReadout readoutTop">
            <p>Live stack</p>
            <strong>3D Config</strong>
          </div>
          <div className="stageReadout readoutBottom">
            <p>Signal</p>
            <strong>99.8%</strong>
          </div>
          <div>
            <p>Featured system</p>
            <h2>Build your stack</h2>
            <span>Curated from {formatPrice(549)}</span>
          </div>
        </div>
      </section>

      <Reveal className="statsStrip" variant="slide">
        <div>
          <strong>24h</strong>
          <span>fast dispatch on stocked gear</span>
        </div>
        <div>
          <strong>6</strong>
          <span>carefully chosen product lanes</span>
        </div>
        <div>
          <strong>4.9</strong>
          <span>average setup support rating</span>
        </div>
      </Reveal>

      <Reveal className="dealRibbon" variant="tilt">
        <MotionGlyphs variant="ribbon" />
        <div>
          <p className="sectionEyebrow">Limited-time upgrade event</p>
          <h2>Bundle credits, open-box picks, and trade-in boosts are live.</h2>
        </div>
        <Link to="/deals">Explore offers <FiArrowRight /></Link>
      </Reveal>

      <Reveal className="experienceSection" id="experience" variant="rise">
        <article>
          <FiCpu />
          <h3>Performance first</h3>
          <p>Every pick balances speed, battery, display quality, and useful longevity.</p>
        </article>
        <article>
          <FiHeadphones />
          <h3>Complete ecosystems</h3>
          <p>Pair devices with audio, displays, and wearables that work cleanly together.</p>
        </article>
        <article>
          <FiShield />
          <h3>Protected purchases</h3>
          <p>Clear returns, warranty guidance, and sourcing confidence are part of the store.</p>
        </article>
        <article>
          <FiTruck />
          <h3>Fast fulfillment</h3>
          <p>Simple shipping and practical updates keep the wait from becoming a mystery.</p>
        </article>
      </Reveal>

      <Reveal className="guidedShop" variant="slide">
        <MotionGlyphs variant="guided" />
        <div className="sectionHeader">
          <p className="sectionEyebrow">Shop faster</p>
          <h2>Find the right gear by category, need, or workflow.</h2>
        </div>
        <div className="guidedCards">
          <Link to="/collections">
            <span>01</span>
            <h3>Shop bundles</h3>
            <p>Curated setups for hybrid work, travel, creators, and focus.</p>
          </Link>
          <Link to="/compare">
            <span>02</span>
            <h3>Compare models</h3>
            <p>See core specs, usage fit, and pricing side by side.</p>
          </Link>
          <Link to="/services">
            <span>03</span>
            <h3>Add services</h3>
            <p>Setup, protection, repair guidance, and pickup support.</p>
          </Link>
        </div>
      </Reveal>

      <Reveal className="catalogSection" id="catalog" variant="rise">
        <div className="sectionHeader">
          <p className="sectionEyebrow">The collection</p>
          <h2>Built for people who work, create, travel, and unwind on great hardware.</h2>
        </div>
        <div className="catalogTools">
          <label>
            <FiSearch />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search phones, laptops, audio..."
            />
          </label>
          <div>
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "active" : ""}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="productGrid">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} handler={addToCartHandler}/>
          ))}
        </div>
      </Reveal>

      <Reveal className="comparisonPreview" variant="tilt">
        <MotionGlyphs variant="compare" />
        <div>
          <p className="sectionEyebrow">Decision support</p>
          <h2>Less guessing, more confidence.</h2>
          <span>Every product now shows practical signals competitors surface well: ratings, stock, monthly pricing, trade-in paths, and service options.</span>
          <Link to="/compare">Open comparison guide <FiArrowRight /></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Best for</th>
              <th>Pick</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Travel</td><td>iPad Air</td><td>Lightweight, fast, accessory-ready</td></tr>
            <tr><td>Desk</td><td>Studio Display</td><td>5K workspace and better calls</td></tr>
            <tr><td>Focus</td><td>AirPods Max</td><td>ANC, comfort, spatial audio</td></tr>
          </tbody>
        </table>
      </Reveal>

      <Reveal className="testimonialSection" variant="slide">
        <div className="sectionHeader">
          <p className="sectionEyebrow">Customer proof</p>
          <h2>Real help beats endless scrolling.</h2>
        </div>
        <div className="testimonialGrid">
          <article>
            <FiStar />
            <p>"The bundle made more sense than anything I built myself. Fewer tabs, better setup."</p>
            <span>Amara, product designer</span>
          </article>
          <article>
            <FiStar />
            <p>"Trade-in credit plus pickup made the upgrade feel easy instead of expensive and chaotic."</p>
            <span>Dev, founder</span>
          </article>
          <article>
            <FiGift />
            <p>"The advice was practical. No pressure to buy the highest spec just because it existed."</p>
            <span>Priya, filmmaker</span>
          </article>
        </div>
      </Reveal>
    </main>
  )
}

const ProductCard=({product,handler})=>(
  <div className='productCard'>
    <div className="productImage">
      <span>{product.badge}</span>
      <img src={product.imgSrc} alt={product.name}/>
    </div>
    <div className="productInfo">
      <p>{product.category} - {product.stock}</p>
      <h3>{product.name}</h3>
      <span>{product.description}</span>
      <ul>
        {product.specs.slice(0, 3).map((spec) => <li key={spec}>{spec}</li>)}
      </ul>
      <div>
        <strong>{formatPrice(product.price)}</strong>
        <small>{product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>} {product.color}</small>
      </div>
      <p className="ratingLine"><FiStar /> {product.rating} ({product.reviews}) - from {formatPrice(product.monthly)}/mo</p>
    </div>
    <button onClick={()=> handler({...product, quantity:1})}>Add to cart</button>
  </div>
)

const KineticSvg = ({ className }) => (
  <svg className={className} viewBox="0 0 260 260" fill="none" aria-hidden="true">
    <path className="glyphSpin" d="M130 18v224M18 130h224M51 51l158 158M209 51 51 209" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
    <circle cx="130" cy="130" r="66" stroke="currentColor" strokeWidth="8" opacity="0.35" />
    <path className="glyphPulse" d="M130 78l18 34 38 6-28 27 7 38-35-18-35 18 7-38-28-27 38-6 18-34Z" fill="currentColor" />
  </svg>
)

export default Home
