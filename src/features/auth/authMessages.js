const messages = {
  'auth/invalid-credential': 'El correo o la contraseña no son correctos.',
  'auth/email-already-in-use': 'Ya existe una cuenta con este correo.',
  'auth/invalid-email': 'El correo no tiene un formato válido.',
  'auth/weak-password': 'La contraseña es demasiado débil.',
}

export function getAuthMessage(error) {
  if (error?.code && messages[error.code]) {
    return messages[error.code]
  }

  if (error?.name === 'ApiError') {
    return error.status
      ? `${error.message} (HTTP ${error.status})`
      : error.message
  }

  if (error?.name === 'TypeError') {
    return 'No se pudo conectar con el backend. Comprueba que esté activo y que CORS permita el frontend.'
  }

  return error?.message || 'No fue posible completar la autenticación.'
}