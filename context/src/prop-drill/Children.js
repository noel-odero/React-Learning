import Grandson from './GrandSon';
import GrandDaughter from './GrandDaughter';

const Children = ({secret}) => {
    <div className="children">
        <h2>{`Children ${secret.familyName}`}</h2>
        <Grandson secret={secret}/>
        <GrandDaughter secret={secret}/>
    </div>
}

export default Children;    