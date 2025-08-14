// src/pages/Subscription.jsx
import './Subscription.css';
import { useNavigate } from "react-router-dom";

export default function Subscription() {
  const navigate = useNavigate();

  const handleSubscribe = (plan, days) => {
    alert(`Subscribed to ${plan} Plan for ${days} days!`);
    // Here you can also save the subscription type to localStorage or backend
    navigate("/");
  };

  return (
    <div className="sub-container">
      <h1>Choose Your Subscription Plan</h1>
      <div className="plan-list">
        <div className="plan-card free">
          <h2>Free Trial</h2>
          <p>15 Days Access</p>
          <ul>
               <li>✅ Access to basic diet plans</li>
               <li>✅ Limited meal suggestions (only Veg )</li>
               <li>✅ Basic calorie tracking</li>
               <li>✅ Access to 1-week meal preview</li>
               <li>❌ No expert guidance</li>
               <li>❌ No customization</li>
               <li>❌ No progress reports</li>
               <li>❌ No support access</li>
              </ul>
          <button onClick={() => navigate('/home')}>Free</button>
        </div>

        <div className="plan-card diamond">
          <h2 >Diamond</h2>
          <p>30 Days Premium</p>
          <ul>
               <li>✅ Includes everything in Free</li>
               <li>✅ Full meal customization</li>
               <li>✅ Access to Veg & Non-Veg plans</li>
               <li>✅ Expert diet tips</li>
               <li>✅ 30-day meal planner</li>
               <li>✅ Progress tracking</li>
               <li>❌ No 1-on-1 consultation</li>
               <li>❌ No 24/7 support</li>
    </ul>
           <button onClick={() => navigate('/Diamond')}>₹249</button>
        </div>

        <div className="plan-card elite">
          <h2>Elite</h2>
          <p>60 Days Elite Access</p>
          <ul>
               <li>✅ Everything in Diamond</li>
               <li>✅ Full expert support</li>
               <li>✅ 1-on-1 personalized diet sessions</li>
               <li>✅ 24/7 chat support</li>
               <li>✅ Monthly progress reports</li>
               <li>✅ 60-day planner with flexible options</li>
               <li>✅ Exclusive workout plans</li>
               <li>✅ Supplement recommendations</li>
    </ul>
          <button onClick={() => navigate('/Elite')}>₹549</button>
        </div>
      </div>
    </div>
  );
}
