import { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Box3, Vector3 } from 'three'
import type { Group } from 'three'
import './App.css'

gsap.registerPlugin(ScrollTrigger)
const easeInOut = gsap.parseEase('power3.inOut')
const heroModelPath = `${import.meta.env.BASE_URL}ballasted_panel_claw.glb`

const pillars = [
  {
    id: 'solar',
    label: '01 / Manufacturing',
    title: 'Rebuilding the domestic solar supply chain',
    description:
      'Advanced cell and module manufacturing built around American industry and a stronger energy future.',
  },
  {
    id: 'generation',
    label: '02 / Power Generation',
    title: 'Developing renewable power projects',
    description:
      'Renewable power projects across the United States and international markets.',
  },
  {
    id: 'data-centers',
    label: '03 / Data Centers',
    title: 'Building the digital infrastructure layer',
    description:
      'Land, power, cooling, and connectivity brought together for the next generation of data centers.',
  },
  {
    id: 'recycling',
    label: '04 / Recycling',
    title: 'Recovering value for a circular solar industry',
    description:
      'Valuable materials recovered and returned to productive use across the solar lifecycle.',
  },
]

const stats = [
  { value: '$5B', label: 'Project Solis across all phases' },
  { value: '~900', label: 'planned permanent jobs' },
  { value: '1 GW', label: 'planned onsite power' },
]

const scenes = [
  { title: 'Intro', copy: 'An integrated energy company building the energy of tomorrow.' },
  { title: 'Manufacturing', copy: 'Advanced cell and module manufacturing rebuilding the domestic solar supply chain.' },
  { title: 'Power Generation', copy: 'Renewable power projects developed across the United States and international markets.' },
  { title: 'Data Centers', copy: 'Land, power, cooling, and connectivity brought together for integrated AI infrastructure.' },
  { title: 'Recycling', copy: 'Valuable materials recovered to support a more circular solar industry.' },
]

function IntroModel() {
  const { scene } = useGLTF(heroModelPath)
  const modelRef = useRef<Group | null>(null)

  useLayoutEffect(() => {
    if (!modelRef.current) return

    const bounds = new Box3().setFromObject(modelRef.current)
    const size = bounds.getSize(new Vector3())
    const center = bounds.getCenter(new Vector3())
    const largestDimension = Math.max(size.x, size.y, size.z)
    const normalizedScale = largestDimension > 0 ? 3.2 / largestDimension : 1

    modelRef.current.scale.setScalar(normalizedScale)
    modelRef.current.position.set(
      -center.x * normalizedScale,
      -center.y * normalizedScale,
      -center.z * normalizedScale,
    )
  }, [scene])

  return (
    <group ref={modelRef}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(heroModelPath)

function SolarModel() {
  return (
    <group rotation={[0.12, -0.25, -0.12]}>
      <mesh position={[0, -1.1, 0]}>
        <boxGeometry args={[3.8, 0.18, 2.2]} />
        <meshStandardMaterial color="#bd9d60" metalness={0.7} roughness={0.25} />
      </mesh>
      {[-1.25, 0, 1.25].map((x) => (
        <mesh key={x} position={[x, 0.15, 0]} rotation={[0, 0, x * 0.08]}>
          <boxGeometry args={[1.05, 2.25, 0.08]} />
          <meshStandardMaterial color="#203238" metalness={0.88} roughness={0.18} />
        </mesh>
      ))}
      <mesh position={[0, 1.4, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.045, 12, 64]} />
        <meshStandardMaterial color="#d9bf82" emissive="#8c6b34" emissiveIntensity={0.32} metalness={0.78} roughness={0.18} />
      </mesh>
    </group>
  )
}

function GenerationModel() {
  return (
    <group rotation={[0.1, 0.35, 0]}>
      <mesh position={[0, -1.25, 0]}>
        <cylinderGeometry args={[1.8, 2.1, 0.22, 48]} />
        <meshStandardMaterial color="#c2a56e" metalness={0.72} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.85, 1.2, 2.8, 32]} />
        <meshStandardMaterial color="#26383b" metalness={0.86} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.055, 12, 80]} />
        <meshStandardMaterial color="#dfc581" emissive="#b18b43" emissiveIntensity={0.45} metalness={0.8} roughness={0.18} />
      </mesh>
      {[-0.8, 0.8].map((x) => (
        <mesh key={x} position={[x, 0.25, 0.1]} rotation={[0, 0, x * 0.22]}>
          <boxGeometry args={[0.14, 3.4, 0.14]} />
          <meshStandardMaterial color="#7f9e91" metalness={0.64} roughness={0.25} />
        </mesh>
      ))}
    </group>
  )
}

function DataModel() {
  return (
    <group rotation={[0, -0.35, 0]}>
      <mesh position={[0, -1.25, 0]}>
        <boxGeometry args={[3.7, 0.2, 2.1]} />
        <meshStandardMaterial color="#c4a66b" metalness={0.7} roughness={0.24} />
      </mesh>
      {[-1.1, 0, 1.1].map((x) => (
        <group key={x} position={[x, 0.15, 0]}>
          <mesh>
            <boxGeometry args={[0.78, 2.55, 0.9]} />
            <meshStandardMaterial color="#17262d" metalness={0.86} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.1, 0.47]}>
            <boxGeometry args={[0.5, 0.035, 0.025]} />
            <meshStandardMaterial color="#8eb4a2" emissive="#5a9a83" emissiveIntensity={0.7} />
          </mesh>
          <mesh position={[0, -0.25, 0.47]}>
            <boxGeometry args={[0.5, 0.035, 0.025]} />
            <meshStandardMaterial color="#d7b873" emissive="#8f6d34" emissiveIntensity={0.55} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function RecyclingModel() {
  return (
    <group rotation={[0.18, 0.25, 0]}>
      <mesh position={[0, -1.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.28, 12, 64]} />
        <meshStandardMaterial color="#7f9e91" metalness={0.72} roughness={0.22} />
      </mesh>
      <mesh position={[0, -1.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.045, 12, 80]} />
        <meshStandardMaterial color="#e0c17d" emissive="#a77c32" emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.8, 0.45, 0]} rotation={[0.2, 0, -0.3]}>
        <boxGeometry args={[0.9, 1.8, 0.9]} />
        <meshStandardMaterial color="#c3a467" metalness={0.78} roughness={0.22} />
      </mesh>
      <mesh position={[0.8, 0.45, 0.1]} rotation={[-0.2, 0.2, 0.3]}>
        <boxGeometry args={[0.9, 1.8, 0.9]} />
        <meshStandardMaterial color="#2c4642" metalness={0.72} roughness={0.25} />
      </mesh>
    </group>
  )
}

function EnergyScene({ progress }: { progress: number }) {
  const groupRef = useRef<Group | null>(null)
  const scaledProgress = Math.min(progress * 5, 4.999)
  const sceneIndex = Math.floor(scaledProgress)
  const sceneProgress = scaledProgress - sceneIndex

  useFrame((state) => {
    if (!groupRef.current) return

    const t = state.clock.getElapsedTime()
    const boundaryProgress = Math.min(sceneProgress, 1 - sceneProgress) * 2
    const transitionZoom = 1 - easeInOut(boundaryProgress)
    const isCompactViewport = state.size.width < 700
    const stageOffset = isCompactViewport ? 0.55 : 1.15
    state.camera.position.x = 4.2 + transitionZoom * 0.8
    state.camera.position.y = 3.1 + transitionZoom * 0.45
    state.camera.position.z = 6.4 + transitionZoom * 2.2
    state.camera.lookAt(stageOffset, 0, 0)
    groupRef.current.rotation.y = sceneIndex * 0.42 + easeInOut(sceneProgress) * 0.16 + t * 0.08
    groupRef.current.rotation.x = -0.08 + Math.sin(t * 0.45) * 0.025
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.035
    groupRef.current.position.x = stageOffset
    groupRef.current.scale.setScalar(0.9 + (1 - transitionZoom) * 0.11)
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.18}>
        {sceneIndex === 0 && (
          <Suspense fallback={null}>
            <IntroModel />
          </Suspense>
        )}
        {sceneIndex === 1 && <SolarModel />}
        {sceneIndex === 2 && <GenerationModel />}
        {sceneIndex === 3 && <DataModel />}
        {sceneIndex === 4 && <RecyclingModel />}
      </Float>
    </group>
  )
}

function App() {
  const [progress, setProgress] = useState(0)
  const cardsRef = useRef<Array<HTMLElement | null>>([])
  const experienceRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!experienceRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: experienceRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        setProgress(self.progress)
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  useLayoutEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return

      gsap.fromTo(
        card,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.12,
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">C</span>
          <span className="brand-name">Convalt Energy</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#story">Story</a>
          <a href="#verticals">Verticals</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Speak with us
        </a>
      </header>

      <main ref={experienceRef}>
        <div className="world-canvas" aria-hidden="true">
          <Canvas camera={{ position: [0, 0, 6], fov: 42 }}>
            <ambientLight intensity={1.15} />
            <directionalLight position={[4, 5, 3]} intensity={2.2} color="#f7d99b" />
            <pointLight position={[-3, -2, 2]} intensity={2.2} color="#5aa38f" />
            <EnergyScene progress={progress} />
          </Canvas>
        </div>

        <section className="hero-section">
          <div className="hero-copy">
            <div className="hero-topline" aria-label="Brand line">
              <span className="brand-mini">An integrated energy company</span>
              <span className="hero-divider" aria-hidden="true" />
              <span>American manufacturing / global development</span>
            </div>
            <h1>BUILDING THE ENERGY OF TOMORROW.</h1>
            <p className="lede">
              Convalt brings manufacturing, power generation, data centers, and recycling together
              as one integrated value chain.
            </p>
            <p className="hero-meta">American Manufacturing • Global Energy Development • Integrated AI Infrastructure</p>

            <div className="hero-actions">
              <a className="primary-button" href="#story">
                Explore the story
              </a>
              <a className="secondary-button" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="stat-row" aria-label="Key company stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract energy infrastructure illustration">
          </div>
        </section>

        <section className="editorial-banner" id="story">
          <p className="section-kicker">Convalt</p>
          <h2>FOUR BUSINESSES. ONE INTEGRATED VALUE CHAIN.</h2>
        </section>

        <section className="story-intro">
          <p className="section-kicker">The Convalt story</p>
          <h2>From the components that capture energy to the infrastructure that puts it to work.</h2>
        </section>

        <section className="narrative-sequence" aria-label="Convalt stages">
          {scenes.map((scene, index) => (
            <article
              key={scene.title}
              className="narrative-panel"
              ref={(el) => {
                cardsRef.current[index] = el
              }}
            >
              <span>0{index + 1}</span>
              <div>
                <h3>{scene.title}</h3>
                <p>{scene.copy}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="story-grid" id="verticals">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="story-card">
              <div className="card-line" aria-hidden="true" />
              <p className="card-label">{pillar.label}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </section>

        <section className="value-panel" id="approach">
          <div className="value-copy">
            <p className="section-kicker">Construct with capital and conscience</p>
            <h2>A long-term commitment to energy, industry, and communities.</h2>
          </div>

          <div className="value-columns">
            <div>
              <span>01</span>
              <h3>American made</h3>
              <p>Advanced manufacturing that strengthens the domestic solar supply chain.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Future focused</h3>
              <p>Renewable power built for growth across the United States and global markets.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Integrated infrastructure</h3>
              <p>Land, power, cooling, and connectivity for the next generation of data centers.</p>
            </div>
            <div>
              <span>04</span>
              <h3>50-year horizon</h3>
              <p>Sustainable growth, meaningful employment, and opportunity for communities.</p>
            </div>
          </div>
        </section>

        <section className="cta-panel" id="contact">
          <div>
            <p className="section-kicker">Connect with Convalt</p>
            <h2>LET'S BUILD WHAT COMES NEXT.</h2>
          </div>
          <a href="mailto:hello@convalt.energy" className="primary-button">
            hello@convalt.energy
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
