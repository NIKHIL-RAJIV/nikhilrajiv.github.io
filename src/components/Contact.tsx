import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { ReactNode, useEffect, useMemo, useState } from 'react';

interface ContactItemProps {
    icon: ReactNode;
    label: string;
    link: string;
    position: {
      top: string;
      left: string;
    };
  }

const Contact = () => {
  const contactLinks = [
    {
      icon: <Github className='w-6 h-6 text-white' />,
      label: 'GitHub',
      link: 'https://github.com/NIKHIL-RAJIV',
      position: { top: '20%', left: '80%' },
    },
    {
      icon: <Linkedin className='w-6 h-6 text-white' />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/nikhil-rajiv/',
      position: { top: '40%', left: '20%' },
    },
    {
      icon: <Mail className='w-6 h-6 text-white' />,
      label: 'nikhilrajiv580@gmail.com',
      link: 'mailto:nikhilrajiv580@gmail.com',
      position: { top: '80%', left: '70%' },
    },
    {
      icon: <FileText className='w-6 h-6 text-white' />,
      label: 'Resume',
      link: 'https://drive.google.com/file/d/1vFqeD4CPemgYnNNiJ_TFVN4qeUdgL6X1/view?usp=sharing',
      position: { top: '65%', left: '45%' },
    },
  ];

  const stars = useMemo(() => {
    return [...Array(150)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  // Convert percentage positions to viewport units for SVG coordinates
  const getCoordinates = (position: { top: string; left: string }) => {
    const top = parseFloat(position.top) / 100;
    const left = parseFloat(position.left) / 100;
    return {
      x: left * 100,
      y: top * 100,
    };
  };

  const constellationLines = [
    // LinkedIn to Resume
    {
      start: getCoordinates(contactLinks[1].position),
      end: getCoordinates(contactLinks[3].position),
    },
    // GitHub to Resume
    {
      start: getCoordinates(contactLinks[0].position),
      end: getCoordinates(contactLinks[3].position),
    },
    // Mail to Resume
    {
      start: getCoordinates(contactLinks[2].position),
      end: getCoordinates(contactLinks[3].position),
    },
    // Mail to GitHub
    {
      start: getCoordinates(contactLinks[2].position),
      end: getCoordinates(contactLinks[0].position),
    },
  ];

  return (
    <div className='relative bg-[#010219] overflow-hidden'>
      <div className='relative h-[50vh] w-full'>
        {stars.slice(0, 75).map((star, i) => (
          <div
            key={i}
            className='absolute w-[1px] h-[1px] bg-white opacity-60 rounded-full animate-twinkle'
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Main Contact Section (100vh) */}
      <section
        id='contact'
        className='relative min-h-screen flex items-center justify-center'
      >
        {/* Background Stars */}
        <div className='absolute inset-0'>
          {stars.map((star, i) => (
            <div
              key={i}
              className='absolute w-[1px] h-[1px] bg-white opacity-60 rounded-full animate-twinkle'
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>

        {/* Constellation Lines */}
        <svg className='absolute inset-0 w-full h-full'>
          {constellationLines.map((line, index) => (
            <line
              key={index}
              x1={`${line.start.x + 0.3}%`}
              y1={`${line.start.y + 1.5}%`}
              x2={`${line.end.x + 0.3}%`}
              y2={`${line.end.y + 1.5}%`}
              stroke='rgba(255, 255, 255, 1)'
              strokeWidth='0.2'
              className='constellation-line'
            />
          ))}
        </svg>

        {/* Contact Links */}
        {contactLinks.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

const ContactItem = ({ icon, label, link, position }: ContactItemProps) => {
  const [typedLabel, setTypedLabel] = useState('');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timeout;
    if (hovered) {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= label.length) {
          setTypedLabel(label.substring(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 70);
      return () => clearInterval(interval);
    } else {
      timeout = setTimeout(() => setTypedLabel(''), 200);
    }
    return () => clearTimeout(timeout);
  }, [hovered, label]);

  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='absolute flex items-center group'
      style={{ top: position.top, left: position.left }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] animate-twinkle'></div>
      <div className='ml-2'>{icon}</div>
      <span className='ml-2 text-white text-sm transition-opacity duration-200'>
        {typedLabel}
      </span>
    </a>
  );
};

export default Contact;
