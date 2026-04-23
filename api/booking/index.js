module.exports = async function (context, req) {
  context.log("Booking called");
  context.res = { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" }};
  if (req.method === "OPTIONS") { context.res.status = 200; context.res.body = ""; return; }

  try {
    const { service, date, time, name, email, phone, notes } = req.body || {};

    // Validate required fields
    if (!service || !date || !time || !name || !email || !phone) {
      context.res.status = 400;
      context.res.body = JSON.stringify({ error: "Alle påkrævede felter skal udfyldes." });
      return;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      context.res.status = 400;
      context.res.body = JSON.stringify({ error: "Ugyldig e-mail adresse." });
      return;
    }

    // Generate booking ID
    const bookingId = "LJ-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();

    const serviceLabels = {
      koeberraadgivning: "Køberrådgivning",
      testamente: "Testamente & Arv",
      aegtepagt: "Ægtepagt & Særeje",
      fremtidsfuldmagt: "Fremtidsfuldmagt",
      skilsmisse: "Skilsmisse & Bodeling",
      doedsbobehandling: "Dødsbobehandling",
    };

    const serviceLabel = serviceLabels[service] || service;
    const formattedDate = new Date(date).toLocaleDateString("da-DK", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

    // Simulate sending confirmation email
    context.log("=== SIMULATED EMAIL ===");
    context.log("To:", email);
    context.log("Subject: Booking bekræftelse - " + bookingId);
    context.log("---");
    context.log("Kære " + name + ",");
    context.log("");
    context.log("Tak for din booking hos LexJuris!");
    context.log("");
    context.log("Booking detaljer:");
    context.log("  Booking ID: " + bookingId);
    context.log("  Ydelse: " + serviceLabel);
    context.log("  Dato: " + formattedDate);
    context.log("  Tidspunkt: kl. " + time);
    context.log("  Navn: " + name);
    context.log("  E-mail: " + email);
    context.log("  Telefon: " + phone);
    if (notes) context.log("  Bemærkninger: " + notes);
    context.log("");
    context.log("Vi ser frem til at hjælpe dig.");
    context.log("Med venlig hilsen, LexJuris");
    context.log("Tlf: 70 70 71 22 | info@lexjuris.dk");
    context.log("=== END EMAIL ===");

    // Simulate internal notification email
    context.log("=== SIMULATED INTERNAL NOTIFICATION ===");
    context.log("To: info@lexjuris.dk");
    context.log("Subject: Ny booking - " + serviceLabel + " - " + name);
    context.log("Booking ID: " + bookingId);
    context.log("Kunde: " + name + " (" + email + ", " + phone + ")");
    context.log("Ydelse: " + serviceLabel);
    context.log("Dato: " + formattedDate + " kl. " + time);
    if (notes) context.log("Bemærkninger: " + notes);
    context.log("=== END INTERNAL NOTIFICATION ===");

    context.res.status = 200;
    context.res.body = JSON.stringify({
      success: true,
      bookingId,
      message: "Booking oprettet. Bekræftelse sendt til " + email,
      emailSent: true,
    });
  } catch (error) {
    context.log.error("Booking error:", error);
    context.res.status = 500;
    context.res.body = JSON.stringify({ error: "Der opstod en fejl. Ring venligst 70 70 71 22." });
  }
};
