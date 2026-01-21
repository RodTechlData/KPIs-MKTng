import React, { useState } from 'react';
import './KpiCard3D.css';

const KpiCard3D = ({
  title,
  value,
  subtitle,
  icon,
  color = 'cyan',
  trend,
  onSelectKpi
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const colorClasses = {
    cyan: 'card-cyan',
    green: 'card-green',
    blue: 'card-blue',
    purple: 'card-purple',
  };

  const handleTapStart = () => {
    setIsTapped(true);
  };

  const handleTapEnd = () => {
    setIsTapped(false);
    if (onSelectKpi) onSelectKpi();
  };

  return (
    <div
      className={`kpi-card-3d ${colorClasses[color]} ${isHovered ? 'hovered' : ''} ${isTapped ? 'tapped' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTapStart}
      onTouchEnd={handleTapEnd}
      onClick={onSelectKpi}
      role="button"
      tabIndex="0"
      aria-label={`Ver detalles de ${title}`}
    >
      <div className="card-light-effect"></div>
      
      <div className="card-content-wrapper">
        <div className="card-header">
          <div className="card-icon">
            <span className="icon-emoji">{icon}</span>
          </div>
          <div className="card-title-section">
            <h3 className="card-title">{title}</h3>
            {trend && (
              <span className={`card-trend ${trend.direction}`}>
                <span className="trend-icon">
                  {trend.direction === 'up' ? '📈' : '📉'}
                </span>
                <span className="trend-value">{trend.value}</span>
              </span>
            )}
          </div>
        </div>

        <div className="card-body">
          <div className="kpi-value-display">
            <span className="value-main">{value}</span>
            <span className="value-subtitle">{subtitle}</span>
          </div>
        </div>

        <div className="card-footer">
          <button className="card-action-btn" aria-label={`Acciones para ${title}`}>
            <span className="action-text">Ver detalles</span>
            <span className="action-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="card-border-animation"></div>
    </div>
  );
};

export default KpiCard3D;
