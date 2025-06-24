// app/my-bookings/page.tsx
import Section from "../components/Section";

export default function MyBookingsPage() {
    return (
        <Section heading="My Bookings">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-gray-600">You have no active bookings.</p>
                <p className="text-sm text-gray-500 mt-2">(This page will show user bookings after login is implemented)</p>
            </div>
        </Section>
    );
}