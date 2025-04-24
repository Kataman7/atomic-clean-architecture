import ThreeAtmModel from '../components/atoms/ThreeAtmModel'
import ThreeOrgScene from '../components/organisms/ThreeOrgScene'

const PagEarth = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Character 3D</h1>
            <ThreeOrgScene backgroundColor="#87CEEB">
                <ThreeAtmModel position={[0, 0, 0]}/>
            </ThreeOrgScene>
            <p className="mt-4 text-gray-600">
                Voici bob.
            </p>
        </div>
    )
}

export default PagEarth