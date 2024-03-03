import React from 'react'
import HeroAbout from '../components/HeroAbout'
import Button from '../components/Button'
import Image from 'next/image'
import Spotify from '../components/Spotify'
import { roboto_mono } from '../fonts'

export default function page() {
  return (
    <div>
      <div className="bg-primary pt-8 sm:pt-0 h-36 md:h-36 flex flex-col mb-0 sm:mb-8">
        <h1 className={`text-6xl font-bold  ${roboto_mono.className}`}>About</h1>
      </div>
      <div className='w-11/12 md:w-5/6 mx-auto '>
        <HeroAbout />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 mt-10 lg:py-10 lg:px-20">
          <div className='text-left lg:col-span-2 mb-10 lg:mb-0 mx-auto lg:mx-0'>
            <p className='mb-10 max-w-prose'>I have no idea what I&apos;m doing and to be completely honest I had to Google &quot;how to write an introduction about yourself.&quot; It was ineffective, to say the least. So, I&apos;ll just skip the pleasantries and jump straight into it if that&apos;s okay with you. My name is Magdalena Moseley though I typically go by Maggie. I&apos;ve always said that when I become rich and famous I&apos;ll one-name it and go by Magdalena (like the queen herself Zendaya) but as that hasn&apos;t happened yet I&apos;ll just stick with Maggie for now.
            </p>
            <p className='mb-10 max-w-prose'>
              I was born and raised in Sheridan Wyoming, apart from a two-ish stint in Bend Oregon. I graduated from Sheridan High School in 2022 (yes our grad song was “22” by Taylor Swift and rightfully so) and then started college at the University of Wyoming. I have been studying there for the past two years in their Human Nutrition and Food program. In the next year, I hope to be accepted into the Didactic Program in Nutrition and Dietetics which will allow me to graduate with my Bachelor of Science in Dietetics. Then the plan is to work as a Registered Nutritionist (and a registered Dietitian someday) with the ultimate goal to work as a nutritional counselor/therapist specializing in the gut-brain connection and improving mental health through the diet.
            </p>
            <p className='mb-10 max-w-prose'>
              Don&apos;t worry we&apos;ll talk more about my career goals and aspirations later. For now, more about who I am, what I&apos;m doing, and why you&apos;re reading this. First: who am I? Well, Maggie, as you know. I am a 19-year-old girl in today&apos;s society, and yes that means that I have parasocial relationships with celebrities and am a big proponent of taking care of our mental health. It also means that I have no idea what I am doing on a typical daily basis and have little sense of who I am which is why this introduction has not been a breeze to write. So in light of that, let&apos;s move on! What am I doing? Well, I am currently enrolled in UW&apos;s exchange program which means that I will be spending the next semester studying abroad at the University of South Australia. But why are you reading this? Probably because you&apos;re one of my family members wanting to know what I am up to (hi Dad). If you&apos;re someone else then I have no idea why you&apos;re reading this, go live your life. Kidding of course. Thanks for joining me! And to actually explain what this is that you are reading I should also tell you that I am a Gilman Scholar which means that I was awarded the Gilman International Scholarship for my semester abroad. Now the Gilman program requires that while abroad, or after I return, I take on a project that will not only spread the word about Gilman but that will spread the word about study abroad in general and all of its benefits. So that is what this is, my required project so that a government department would give me money! On a serious note though, I am truly very grateful for the help that Gilman has provided me and the opportunities that I have because of them.
            </p>
            <p className='max-w-prose'>
              I have chosen to write this blog because, to put it simply, I love writing (and also maybe it will gain a lot of traction and I&apos;ll become a travel blogger, who&apos;s to say?). The blog will be following me along on my journey. And I really have to mention that it has been brought to you by Alicia Thoney Headquarters, The ATHQ, and the lovely Alicia Thoney herself (I&apos;m so lucky!). I hope to post a few times a month and for each post to have a different purpose. Some posts will detail the ins and outs and the ups and downs of the entire process of getting here, some will be focused on application advice or scholarship help, and others will simply be updates about my time here including everything that I am doing and everything that I am feeling. There is also a nifty photo gallery section and a link to my dedicated Spotify Playlist (feel honored that I&apos;m sharing that with you because that is quite the privilege) So, if you&apos;re a prospective study abroad student or just someone who is intrigued, or my parents, then stay tuned!
            </p>
          </div>
          <div className='lg:col-span-1'>
            <Spotify />
          </div>
        </div>
        <Button text="Return Home" link="/" />
      </div>
    </div>
  )
}
