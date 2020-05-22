const ClinicServices = {
  getServices: () => [
    {
      serviceName: { en: 'Pediatrics', es: 'Pediatría' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/pediatria.svg`,
    },
    {
      serviceName: { en: 'Emergencies', es: 'Emergencias' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/emergencias.svg`,
    },
    {
      serviceName: { en: 'Chiropractics', es: 'Quiropráctico' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/quiropractico.svg`,
    },
    {
      serviceName: { en: 'Orthopedics', es: 'Ortopedista' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/orthopedic-leg.svg`,
    },
    {
      serviceName: { en: 'Orthodontics', es: 'Ortodoncia' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/ortodoncia.svg`,
    },
    {
      serviceName: { en: 'Optometry', es: 'Optometría' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/optometria.svg`,
    },
    {
      serviceName: { en: 'Gynecology', es: 'Ginecología' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/ginecologia.svg`,
    },
    {
      serviceName: { en: 'Physiotherapy', es: 'Fisioterapia' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/fisioterapia.svg`,
    },
    {
      serviceName: { en: 'Neurology', es: 'Neurología' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/neurology.svg`,
    },
    {
      serviceName: { en: 'Dental Services', es: 'Servicios Dentales' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/dental.svg`,
    },
    {
      serviceName: {
        en: 'Diabetes Specialist',
        es: 'Especialista en Diabetes',
      },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/diabetes.svg`,
    },
    {
      serviceName: { en: 'General Medicine', es: 'Medicina General' },
      iconPath: `${process.env.PUBLIC_URL}/assets/images/services/general medicina.svg`,
    },
  ],
};

export default ClinicServices;
