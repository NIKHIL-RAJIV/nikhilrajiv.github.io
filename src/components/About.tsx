import Card from './AboutCard';

const About = () => {
  return (
    <section id='about' className='min-h-screen py-32 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Top section with education */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
          {/* Education - Left side, double height */}
          <Card
            title='Education Journey.'
            content='Education has always been a mix of fun and frustration, but math never got boring. Solving problems and finding patterns just clicked. That love for logic led me to coding, where every bug is a puzzle to crack.<newline> Scoring in the 97th percentile in JEE Mains got me into the IIIT Nagpur. Once here, I started looking around, exploring, and learning my way—slowly turning my passion into reality by building, breaking, and fixing things with code.'
            image='https://iiitn.ac.in/images/album/upcoming-campus-photo//16.jpeg'
            className='md:col-span-2 h-[400px]'
          />
          <div className='md:col-span-1 flex flex-col gap-6'>
            {/* Two stacked cards on the right */}
            <Card
              title='Love for Food.'
              image='https://images.stockcake.com/public/3/a/5/3a5763bf-f66d-49a9-826d-7fc6eca698e9_large/flavorful-biryani-feast-stockcake.jpg'
              className='h-[185px]'
            />
            <Card
              title='Binge List.'
              content='Been watching Suits. LOVE action comedies. If comfort films was a thing, then Adam Sandler films would be up there.'
              className='h-[190px]'
            />
          </div>
        </div>

        {/* Rest of the cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Hometown - Small card */}
          <Card
            title='My Hometown.'
            content="I'm from Vizag, the City of Destiny, known for its beautiful beaches, rich culture, and historical significance."
            image='https://vizagtourism.org.in/images/v2/headers/visakhapatnam-vizag-1-night-2-days-tour-packages-with-hotel-cab-itinerary-price.jpg'
            className='md:col-span-1'
          />

          {/* Tech Enthusiast - Medium width */}
          <Card
            title='Tech Obsession.'
            content='I love solving problems with code—And I take pride in it when they’re mine. Whether it’s fixing a broken deployment at 2 AM, making my AI models actually useful, or getting my frontend and backend to finally talk to each other without a fight, I enjoy the process of figuring things out. <newline> It’s frustrating, sure, but there’s nothing better than watching something I built work exactly how I need it to. Solving problems isn’t just a skill—it’s proof that I can make tech work for me, not the other way around.'
            className='md:col-span-2'
          />

          {/* Reading - Medium width */}
          <Card
            title='Things to know.'
            content='I speak 3 language fluently — English, Hindi and Telugu. I think Linux is very cool and Docker is my guardian angel. Retro futurism is the key to global peace. Dark chocolate is too good.'
            className='md:col-span-2'
          />

          {/* Quick Facts - Small card */}
          <Card
            title='EMINƎM'
            image='https://media.npr.org/assets/music/news/2010/06/eminem_wide-5b8530e7c1ae24e07afa9c9c5b49b50d46a43364.jpg?s=1400&c=100&f=jpeg'
            imgsize={'52'}
            className='md:col-span-1'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
