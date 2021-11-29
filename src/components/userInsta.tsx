interface userInstaProps {
  user: string;
}

export default function userInsta(props: userInstaProps) {
  return (
    <div>
        <h3 className={` text-white`}>{props.user}</h3>;
    </div>
  )
}
