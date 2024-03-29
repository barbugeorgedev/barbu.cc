import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import FadeDown from '@components/animations/FadeDown'
import FadeRight from '@components/animations/FadeRight'
import FadeUp from '@components/animations/FadeUp'
import { renderCanvas } from '@/components/RenderCanvas'
import { ScrollContext } from '@components/ScrollObserver'

export default function Hero(){
  const ref = useRef(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = ref

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  useEffect(() => {
    renderCanvas()
  }, [])

  return (
    <div>
      <h1 className="sr-only">
        Hello I'm George Barbu, a Software Engineer / Full Stack Developer
      </h1>
      <div
        className="relative z-10 flex h-[calc(100vh-81px)] md:h-[calc(100vh-112px)] items-center"
        style={{
          transform: `translateY(${progress * 20}vh)`,
        }}
      >
        <AnimatePresence>
          <div className="flex flex-col justify-between mt-[-120px] w-screen">
            <div ref={ref} className="md:text-4xl mx-auto">
              <div className="max-w-5xl flex flex-col gap-3 font-merriweather">
                <div className="cursor-default">
                  <FadeUp duration={0.6}>
                    <h2 className="hidden text-[3.375rem] leading-[3.375rem] md:text-[5.375rem] md:leading-[5.375rem] md:block lg:text-[9.375rem] lg:leading-[9.375rem]">
                      Hello
                    </h2>
                  </FadeUp>
                  <div className="flex gap-0 items-center justify-between sm:gap-3">
                    <FadeUp duration={0.6} delay={0.4}>
                      <h2 className="hidden text-[3.375rem] leading-[3.375rem] md:text-[5.375rem] md:leading-[5.375rem] md:block lg:text-[9.375rem] lg:leading-[9.375rem]">
                        I'm
                      </h2>
                    </FadeUp>
                    <FadeRight duration={0.6} delay={1.4}>
                      <div className="opacity-70">
                        <h2 className="text-[1.925rem] leading-[1.925rem] md:text-[2.688rem] md:leading-[2.688rem] lg:text-[70px] lg:leading-[70px]">
                          Software Engineer
                        </h2>
                        <h2 className="text-[1.925rem] leading-[1.925rem] md:text-[2.688rem] md:leading-[2.688rem] lg:text-[70px] lg:leading-[70px]">
                          Fullstack Developer
                        </h2>
                      </div>
                    </FadeRight>
                  </div>
                  <FadeUp duration={0.6} delay={0.8}>
                    <h2 className="text-[2.75rem] leading-[3.375rem] md:text-[5.375rem] md:leading-[5.375rem]  lg:text-[9.375rem] lg:leading-[9.375rem]">
                        George Barbu
                    </h2>
                  </FadeUp>
                </div>
                <FadeRight duration={0.6} delay={2}>
                  <Link href="/about">
                    <a>
                      <h3 className="underline-magical w-max text-sm md:text-xl ml-1 font-merriweather cursor-pointer">
                        Read more about me &rarr;
                      </h3>
                    </a>
                  </Link>
                </FadeRight>
              </div>
            </div>
            <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col justify-center items-center">
                <FadeDown duration={1} delay={2.8}>
                  <HiOutlineArrowNarrowDown size={20} />
                </FadeDown>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  )
}