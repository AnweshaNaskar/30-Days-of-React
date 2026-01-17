import ProfileCard from './profile';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      <ProfileCard 
        name="Sarah Jenkins"
        age={28}
        occupation="Software Engineer"
        location="Austin, TX"
        bio="Loves building accessible web apps and hiking with her dog."
        profileImage="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <ProfileCard 
        name="Marcus Chen"
        age={32}
        occupation="Graphic Designer"
        location="San Francisco, CA"
        bio="Minimalist designer focused on brand identity and typography."
        profileImage="https://randomuser.me/api/portraits/men/32.jpg"
      />
    </div>
  );
}