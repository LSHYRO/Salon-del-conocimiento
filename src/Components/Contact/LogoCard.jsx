export default function LogoCard({ logoUrl }) {
    return (
        <div className="logo-card-container">
            <img src={logoUrl} className="logo-img"/>
        </div>
    );
}