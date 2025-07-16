import Parent from './Parent'

const Family = ({secret})=> {
    console.log(secret);
    <div className="family">
        <Parent secret={secret}/>
    </div>
}

export default Family;