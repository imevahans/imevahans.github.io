import React, { useEffect, useState } from 'react';

function FloatingIcon() {

  useEffect(() => {
    const handleScroll = () => {
        const passedDiv = document.getElementById('ResumeDiv');
        const hiddenDiv = document.getElementById('ProjectDiv');
        const floatingIcon = document.getElementById('floating-icon');
        const scrollPosition = window.scrollY;

        if (
        scrollPosition >= passedDiv.offsetTop - 45 &&
        scrollPosition <= hiddenDiv.offsetTop + 465
        ) {
        floatingIcon.classList.add('active');
        } else {
        floatingIcon.classList.remove('active');
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="floating-icon">
      <img src="./kayak.svg" alt="Floating Icon" />
    </div>
  );
}

export default FloatingIcon;
