import React from 'react';
import { Users, Calendar } from 'lucide-react';

const DrivingStats = () => {
  const stats = [
    {
      number: '2,648',
      description: 'London learners have trusted us to get them road ready'
    },
    {
      number: '9,885',
      description: 'Lessons delivered in London'
    },
    {
      number: '£42.00',
      description: 'The average price per lesson hour in London'
    },
    {
      number: '24/7',
      description: 'Book lessons 24/7 online, in real-time',
      icon: null
    },
    {
      number: null,
      description: 'Change your instructor anytime',
      icon: <Users size={40} />
    },
    {
      number: null,
      description: 'Manage your lesson bookings online',
      icon: <Calendar size={40} />
    }
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .driving-stats-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .main-heading {
          text-align: center;
        font-size: 28px;
    font-weight: 600;
    line-height: 38px;
         color: #4D5761;
          margin-bottom: 40px;
          
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          align-items: center;
        }

        .stat-card {
          text-align: center;
         
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 140px;
        }

        .stat-number {
          font-size: 28px;
    font-weight: 600;
    line-height: 38px;
           color: #4D5761;
          margin-bottom: 16px;
         
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
          color: #2c3e50;
          height: 60px;
        }

        .stat-description {
          font-size: 1rem;
          color: #5a6c7d;
          line-height: 1.5;
          max-width: 280px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .main-heading {
            font-size: 1.8rem;
            margin-bottom: 50px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div className="driving-stats-container">
        <h1 className="main-heading">Connecting You to Top Driving Instructors in the UK</h1>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              {stat.icon ? (
                <div className="icon-wrapper">{stat.icon}</div>
              ) : (
                <div className="stat-number">{stat.number}</div>
              )}
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DrivingStats;