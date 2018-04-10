export function copyToClipboard (text: string): void {
  const aux = document.createElement('textarea')
  aux.innerHTML = text
  document.body.appendChild(aux)
  aux.select()
  document.execCommand('copy')
  document.body.removeChild(aux)
}
