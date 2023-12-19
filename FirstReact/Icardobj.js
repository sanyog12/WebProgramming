export default function Icardobj(props) {

    let { name, email, gender } = props.obj

    return (
        <>
            <p> name:{name} </p>
            <p> email:{email} </p>
            <p> gender:{gender} </p>
            <hr></hr>
        </>
    )
}
