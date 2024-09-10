document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    if (toggleSwitch) {
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
    
        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');document.addEventListener('DOMContentLoaded', function() {
                    // Try finding the toggle switch element
                    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
                    
                    if (toggleSwitch) {
                        // Retrieve the current theme from localStorage
                        const currentTheme = localStorage.getItem('theme');
                        
                        // Set the theme based on localStorage value
                        if (currentTheme) {
                            document.documentElement.setAttribute('data-theme', currentTheme);
                            toggleSwitch.checked = (currentTheme === 'dark');
                        }
                    
                        // Define the function to switch the theme
                        function switchTheme(e) {
                            const theme = e.target.checked ? 'dark' : 'light';
                            document.documentElement.setAttribute('data-theme', theme);
                            localStorage.setItem('theme', theme);
                        }
                    
                        // Add an event listener to the toggle switch
                        toggleSwitch.addEventListener('change', switchTheme, false);
                    } else {
                        console.error('Toggle switch element not found. Please check your HTML structure and selector.');
                    }
                });
                
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }
    
        toggleSwitch.addEventListener('change', switchTheme, false);
    } else {
        console.error('Toggle switch element not found.');
    }
});
