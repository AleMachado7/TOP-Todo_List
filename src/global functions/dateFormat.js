import format from "date-fns/format"

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-")
  const dateToFormat = new Date(year, month - 1, day) // set -1 to the month since JS dates are zero based indexed

  return format(dateToFormat, "dd/MM/yyyy")
}

export default formatDate
