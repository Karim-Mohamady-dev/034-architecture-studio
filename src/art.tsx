export default function HeroArt({ alt }: { alt: string }) {
  return (
    <img src="https://images.pexels.com/photos/19344325/pexels-photo-19344325/free-photo-of-exterior-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={alt} loading="lazy" className="h-auto w-full object-cover" />
  )
}
