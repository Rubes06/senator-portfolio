import { Words } from './Reveal'

export default function PageHeader({ title, text }: { title: string; text: string }) {
  return (
    <section className="pagehead">
      <div className="container">
        <Words as="h1" text={title} />
        <p>{text}</p>
      </div>
    </section>
  )
}