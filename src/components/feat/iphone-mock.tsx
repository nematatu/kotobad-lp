import { Iphone } from '@/components/ui/iphone'

export default function Mock() {
  return (
    <div className="w-[210px] sm:w-[260px] md:w-[320px] lg:w-[380px]">
      <Iphone
        src="https://family-reminder-9ab33.web.app/img/mv.png"
        className="drop-shadow-[0_24px_36px_rgba(2,6,23,0.25)]"
      />
    </div>
  )
}
