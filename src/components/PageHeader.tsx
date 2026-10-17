import { Words } from './Reveal'

export default function PageHeader({ title, text }: { title: string; text: string }) {
  return (
    <section className="pagehead">
      <div className="container pagehead-in">
        <div>
          <Words as="h1" text={title} />
          <p>{text}</p>
        </div>
        <img
          className="pageflag"
          src="/images/apc-logo.png"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>
      <div className="tricolour" />
    </section>
  )
}