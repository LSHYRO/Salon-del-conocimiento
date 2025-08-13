import React from 'react';

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f6fa 0%, #dff9fb 100%)',
        color: '#30336b',
        fontFamily: 'Montserrat, Arial, sans-serif',
    },
    title: {
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#130f40',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
        color: '#535c68',
    },
    button: {
        padding: '0.75rem 2rem',
        fontSize: '1rem',
        backgroundColor: '#22a6b3',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background 0.2s',
    }
};

const NotFound = () => (
    <div style={styles.container}>
        <div style={styles.title}>404</div>
        <div style={styles.subtitle}>Página no encontrada</div>
        <button
            style={styles.button}
            onClick={() => window.location.href = '/'}
        >
            Volver al inicio
        </button>
    </div>
);

export default NotFound;