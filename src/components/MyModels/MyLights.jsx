import * as THREE from 'three'

const MyLights = () => {
    return (
        <>
            <spotLight
                position={[2, 5, 5]}
                intensity={400}
                angle={0.13} // will focus light on the lamp
                penumbra={0.2} // softness for the edges of lights
                color="#1bb3f5"
            />

            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                intensity={40}
                penumbra={0.5} // softness for the edges of lights
                color="#add8e6"
            />

            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                intensity={60}
                penumbra={1} // softness for the edges of lights
                color="#FFF4C9"
            />

            <primitive
                object={new THREE.RectAreaLight("#FFF4C9", 8, 3, 2)}
                position={[1, 3, 4]}
                intensity={8}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />
            <pointLight
                position={[0, 1, 0]}
                intensity={10}
                color="#FFF4C9"
            />

            <pointLight
                position={[1, 2, -2]}
                intensity={15}
                color="#0d00a4"
            />
        </>
    )
}

export default MyLights