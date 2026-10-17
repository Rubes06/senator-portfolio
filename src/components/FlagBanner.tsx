import { Reveal } from './Reveal'

const LOGO = '/images/apc-logo.png'

export default function FlagBanner() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="flagcard">
          <img
            className="flagimg"
            src={LOGO}
            alt="All Progressives Congress logo"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          <div>
            <h3>All Progressives Congress</h3>
            <p>Senator Shuaib Afolabi Salisu represents Ogun Central on the platform of the APC.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}